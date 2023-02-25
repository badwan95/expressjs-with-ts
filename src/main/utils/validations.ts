import Joi from 'joi';
import {LoginBody} from '../../types/types';

export const validateLoginData = (login: LoginBody) => {
  const loginSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().min(8).max(36).required(),
  });
  return loginSchema.validateAsync(login);
};

// export const validateUserData = (user: IUser) => {
//   const userSchema = Joi.object<IUser>({
//     name: Joi.string().min(2).required(),
//     email: Joi.string().email,
//     password: Joi.string().min(8).max(36).required(),
//     active: Joi.boolean(),
//   });
//   return userSchema.validateAsync(user);
// };
