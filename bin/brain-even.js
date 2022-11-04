#!/usr/bin/env node
import gameCore from '../src/utils/gameCore.js';
import evenGame from '../src/utils/evenGame.js';

gameCore('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
