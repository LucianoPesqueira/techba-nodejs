import dotenv from "dotenv";

dotenv.config();

import jwt, { decode } from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token no enviado",
    });
  }

  //tengo que obtener el token
  const token = authHeader.split(" ")[1];

  //validar que sea un token valido
  if (!token) {
    return res.status(401).json({
      message: "Formato de token no valido",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({
      message: "Token invalido o expirado",
    });
  }
};
