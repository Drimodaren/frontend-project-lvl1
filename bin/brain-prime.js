#!/usr/bin/env node
import gameCore from '../src/utils/gameCore.js';
import primeGame from '../src/utils/primeGame.js';

gameCore('Answer "yes" if given number is prime. Otherwise answer "no".', primeGame);
