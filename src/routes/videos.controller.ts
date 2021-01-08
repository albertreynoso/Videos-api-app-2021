/**
 * En este archivo estaran todos los controlafores de la función, que pueden ser las funciones de enrutamiento
 */
//importar el modulo requesthandler para especificar las variables que crearemos
import { RequestHandler } from "express";
import { url } from "inspector";

import Video from "./videos";

export const createVideo: RequestHandler = async (req, res) => {
  console.log(req.body);
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound) {
    return res.status(301).json({ message: "video already exists" });
  }
  const video = new Video(req.body);
  //This function will save the json file with the information of the video and is asynchronous
  const savedVideo = await video.save();
  res.json(savedVideo);
};
// las variables se pueden exportar en la exprecion misma
export const getVideos: RequestHandler = async (req, res) => {
  try {
    const allVideos = await Video.find();
    return res.json(allVideos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  //The object id of mongo db is length 24 hex string, you can check it by checking if the string matches  /^[a-fA-F0-9]{24}$/.
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) return res.status(204).json();
    //This will extract the params from the route.
    return res.json(videoFound);
  } else {
    res.json({ message: "The id is incorrect" });
  }
};

export const updateVideo: RequestHandler = async (req, res) => {
  //USE THIS TO KNOW IF THE ID MATCHS THE MODEL'S OBJECTID
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    //THERE ARE THREE PARAMETER ON THE UPDATE FUNCTION, ONE IS TO FIND THE SUBJECT, THE SECOND IS TO REQUEST SOMETHING OF THE USER TO CHANGE, THE THIRD IS TO USE THE CHANGED KEYS ON A NEW JSON FILE
    const videoUpdated = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!videoUpdated) return res.status(204).json();
    res.json(videoUpdated);
  } else {
    res.json({ message: "The id is incorrect" });
  }
};

export const deleteVideo: RequestHandler = async (req, res) => {
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if (!videoFound) return res.status(204).json();
    return res.json(videoFound);
  } else {
    res.json({ message: "The id is incorrect" });
  }
};
