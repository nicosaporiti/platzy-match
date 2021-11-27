const { response } = require('express');
const Player = require('../models/Players');

const newPlayer = async (req, res = response) => {
  const { email } = req.body;

  try {
    let player = await Player.findOne({ email });

    if (player) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo ya se encuentra participando',
      });
    }

    player = new Player(req.body);

    await player.save();

    res.status(201).json({
      ok: true,
      uid: player.id,
      name: player.name,
      email: player.email,
      msg: player.msg,
      twitter: player.twitter,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error en la petición',
    });
  }
};

const getPlayers = async (req, res = response) => {
  const players = await Player.find().populate();

  try {
    res.status(200).json({
      ok: true,
      players,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'Error en la petición',
    });
  }
};

module.exports = {
  newPlayer,
  getPlayers,
};
