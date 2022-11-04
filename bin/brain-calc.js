#!/usr/bin/env node
import gameCore from '../src/utils/gameCore.js';
import calcGame from '../src/utils/calcGame.js';

gameCore('What is the result of the expression?', calcGame);
