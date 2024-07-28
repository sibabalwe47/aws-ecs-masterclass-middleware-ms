import * as sessionsDBProvider from "../libs/dynamodb/index.js";
import * as Logger from "../utils/logger.js";


const storeSesion = async (req, res) => {
  try {
    const sessionData = req.body;

    const storeSession = await sessionsDBProvider.putItemHandler(sessionData);

    Logger.writeLog({
      url: req.url,
      body: req.body,
      result: result,
    });

    res.status(200).json({
      message: "Session stored successfully!",
    });
  } catch (error) {
    Logger.writeLog({
      url: req.url,
      body: req.body,
      error: error,
    });
    res.status(error.statusCode).json({
      type: error.type,
      message: error.message,
    });
  }
};

const removeSession = async (req, res) => {
  try {
    const { accessToken } = req.body;

    const removeExistingSessions = await sessionProvider.getItemHandler(
      accessToken
    );

    Logger.writeLog({
      url: req.url,
      result: signoutAction,
      session: removeExistingSessions,
    });

    res.status(200).json({
      message: "OK",
    });
  } catch (error) {
    Logger.writeLog({
      url: req.url,
      body: req.body,
      error: error,
    });
    res.status(error.statusCode).json({
      type: error.type,
      message: error.message,
    });
  }
};

const healthCheck = async(req, res) => {
  Logger.writeLog({
    url: req.url,
    result: "OK",
    msg: "Middleware service is healthy",
  });
  res.status(200).json({
    message: "OK",
  });
}

export default {
  storeSesion,
  removeSession,
  healthCheck
};
