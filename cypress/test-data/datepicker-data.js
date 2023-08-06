import dayjs from "dayjs";

export const currentDate = dayjs().format('MM-DD-YYYY');
//export const nextDayDate = currentDate.add(1, 'day').format('MM-DD-YYYY');