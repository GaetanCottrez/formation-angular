import { Message } from '../../functionnal/interfaces/message';

export interface ApplicationState {
  messages: Array<Message>;
  tasks: Task[];
}
