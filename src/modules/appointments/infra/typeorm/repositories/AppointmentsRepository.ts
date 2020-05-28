import { EntityRepository, Repository } from 'typeorm';

import IAppointmentsRepositoy from '@modules/appointments/repositories/iAppointmentsRepository';

import Appointment from '../entities/Appointment';

@EntityRepository(Appointment)
class AppointmentsReporitory extends Repository<Appointment>
  implements IAppointmentsRepositoy {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentsReporitory;
