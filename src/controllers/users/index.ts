import Joi from 'joi';
import { formatResponse, formatError } from '../format-response';
import ValidationError from '../../exceptions';
import useCases  from '../../use-cases';
import makeCreateUserAction from './create-user'
import { makeCreateUserActionParams } from './type';

const createUserAction = makeCreateUserAction({
  Joi,
  formatError,
  formatResponse,
  createUser: useCases.userUseCases.createUser,
  ValidationError,
} as makeCreateUserActionParams);

const userActions = Object.freeze({
  createUserAction,
});

export default userActions;
