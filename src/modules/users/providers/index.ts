import { container } from 'tsyringe';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '../providers/HashProvider/implementations/BcrypHashProvider';

container.registerSingleton<IHashProvider>(
  'HashProvider',
  BCryptHashProvider
)
