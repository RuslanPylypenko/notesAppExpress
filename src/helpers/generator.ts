// @ts-ignore
import {v4 as uuidv4} from 'uuid';

export const Id = () => {
    return uuidv4().substring(0, 8)
}
