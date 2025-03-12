import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  createdAt: Date;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, default: "No description" },
  price: { type: Number, default: 0 },
  category: { type: String, required: true },
  image: {
    type: String,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIEBQMHBv/EAEAQAAADBQUGBAMGBAYDAAAAAAABEQIhMUHwA1FhgcEEEnGRoeEFsdHxEyIyFCQzYoKiNHKDkhUjQlJjwiVDU//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6/Hojq7RCV6kcq7yB2Bqk65zgGBJDhWgCvuPnXPKIFLKBcuGkwK5MIaaZhdDz99QEwRSfVRiCret8a1kLJZcddZQEeTj5QrhKICzdHhyqUxJOSF1cs4CuVEI1qFKEbuK665AIb5c38eOshZk86qOoS9Xe2gThhDTScQElByVUgiT8e9TkLiWT67wCEeMUrQAvOd7qpIhCGGFYXTCaIUbtNMwjD1WuoCZO4VT4CzN51WchDOcuNc8gcsKrlEAJUNxuuOFSumEodDhwq+AcMp++oKiYXnCr8gFZNoic03jutsk/PzFEJm5gzRzrImvbgABOav41RPAsOnTt1Arkc6WkuEogcH+S++oCeVdOq4Bfn379AxXNddchctPZP2gHBcqqbw4G5JQqjCb+SL00nER165r11nAA9D79+gr1mq4V2xC/260gh8C/t00zACgSGckTp26hyTp7dcgcdKvr/wBgV/fXWUAF5xquQcMIdO3UTeLCqhKIKU/WtQB2CdPXvgKkVx79+gPxVY99cgJkzT5TkiFXYAfiq1WoksHVWYOw5aaTiLNeq66zgAhwjfVZAarNVqrsQkb9PbQHOcUYJppKICNbqvOzw3t7SQCqZF9Rl/W3ffjMAFuSBzWu4cYYnzqUhDitVjOAsDdlVJMA5qt1cs4hF/BE6dr5hC5OFcsxJcaq+QD2s7OzOyNttpGXq8Pus7Vf1CMmux215L5Dn8QHQ3tkJ+95ifF2MnRyMc+EAAb/ANo2QoWa/pA9r2b/AOJ/2kOeoAN89vsihYmuQh+IlKx6jQMQBvn4k1KyLmPfZNqa2g2yNkmUghjkjd8KP/MtC/KA8mLT5miUkfN1Y5D3K+dUkpDQZbMtobJ6k2b1fz1G8waskmEq7ALLjc/lT5gaI6FV0gLKU6qMgO/WueQCkTcibd/tYZPzAYGyycWWTu3rM2vKHAAGRLivLppKIlyPWiqYHc56SqouFjyPv36AJyTjrrkLnxlx4aA9ZqulYZiLDJNO3UB62D9mti4+Q56jobI9i2Ic4AABCUzRl5nAAAb+z7AybJNW6qf+ke/2LZ0/D6mA44DpbTsDJsrs5I1cZxGhaWFtZkrbBkzeA8zG34Uf3hovyGNMxteFn974smA0WjP7fbl/ytETsbtMx07Iy3CeaVSzgOVb/L4ntLJw3zN9xvHUsT+R9OfXIBnI1JUxrsKSqTn8I5aZgSuRZJhd26iQS4uleeABvESK0WdsbPvxAZMm0ny78f8ATu6igMLjiXFes+M4BV3toK97ulVALtOlTmAiFBMk00zCJcevqv7glgl9OqAr1hU+90gHpsL27Yr0fVSHOHQ2H8e1uQhz23NNFcYCDs7KwyxYMbpESkQ4w7WymuzWZ/lIBNqtvg2akStGaMleY8fg7UZb57QRN/7d1xDLbmWt2ztGS3vhtKZYDMtqsTY3visJxATZbdq03mLQktGDRoY2bFu0xbFtG6ZGqIMdjW1tra3QyZbMiZWZENsyJDAfm1cNnw0/vjGfkNUe/h5/fLLinQBrbcW74vtGJkd0ipch0rD8MnYImmkojQ8TJPGLRFgyfSsBv7N+GUJVUZgPRydlj5rdOIGkVzXXWcAc9cVfXaQFKKrVagBskZvYI/6G97cJAB7qEvw4OVtovIQBbkQiqsIi8eUa1kIb36xq+cBYGvnXsAc4175BV3DhpMKhppmIjuOfvqAz2T+KaL8l2I0bZ1taF+Y/Mbuymm1xiybqjpAae0km0WhfmMB5jq7BbMNbOyzvETTLjIzHJEMB3ztbMotscx4GzsW9vNfBXiQ4xiAO79r2dkvxmEwMeVr4hYMsGbDW81IiHFMQAMx67EabZZfzDwMemzGm02J/nZ8wGfjBJ4qt9mUq5Db2ZdzHjXeA8PGi/wDIMNf8RTxPlx9R77N9EOlcpRAe0nKuFO0mIaId3CqeLLssfPUTF2D9dcgFVooNNF/LaMs+fmAbhnBlrKyJr24CALM1M1m+qg8R6EirSduoqo7SuUohE00Va6gJKScJVnkKuJzVevfoBU/XXIFyTTy/6gLs/wDFsng/k4am2u2q04jbsP4hg4RKqfEXaNhO2t2rQmyIjkA5hiDof4aU7cv7e4f4fZM/XtHkQDnCGY6H2bYSjtZS/wDYyMTs/DGSVramT/WQDnmIOgZ+EsxtiP8AUYnxfCCgZnw3zAc4zFsmktWDSDRH1HQ+0+FF9NmpX7h68hmztfh8WdmMsdwgE8YYM9psWn/SZFVELs6bnKHSuYm1WzO1NMGwyZbqk8orUMxnZuLj1q+cAGUjg9e/foKSuiquhVXhjqiemkBERC8i00lEBD3HLuG528TR+XuIM99Hbyf1t334gAkiREwquAvGD69egPe+qnOAki0r2mAs5xqoZiS5du18w8uGmmYr6p+sgGLUDPzqpOHhasttG9pqavrPoNgo44V1lAEJIXSSuEogOc3s7TRk4zh27dR5fYyuI3a+XVcB1t0kOCPlXeQInuXnrlEByvsSK69dV16DItjNXEbzur2xHTROiOTh2umCQJ0IJppOIDmlsdxFKvTqMvsl5c659B0JnfVLOAFhfwrQBpFspqTjUsH1piM2NnToidO18xtp8pwTg7lpmIeL6fU5APJiyIrqqiHqnOqPoLOa8a55BNHQgldogFzjqndRDSUOLqqARXq5a1kFxqcYrrrkAyLfehWh/wArLJ+YDFCMiVlg+Nk015Q4CAKcpPgmmkohA78I1qB8Hed1aAcVTnVSACMn+a1zyCRvrTQFNZxwWtMQKDiOXbtdMBed3HDtOIEnS9a4zgEjKXCqg4RVP2zrkAOc8idfXYWecEhV2YPWBq7t26iOKCJ0qoAEu6++oOvLnXPIUzcc49+98gTjG+qxAHZrVSiHbGtQV2DpVUXAvkffv0AQkWJc9dchePoldAeqmRqsMq9xCdCru10wFuQjjdXLMTMsjrnOAGbry4SqkFPFar0ARyXxmntpADiZJkc6uzFWCHN1eXUT0chQKs1wAQ2mWTfaMlxtTZ8o8QGZb5Lu/EJ791pkn5+wAI0RE2bP5miU8GVAi+goLuQxpwAAxX5Fd9Cp+pBk0hG06Bt5p6zAAFL8QivaIubKjBl7JYssHzNAABWnMtOKDZ8jpRkbPz7qn9W6qv8ApWsAABiyakwd/wAOGPpK4DNGVQvpaNODSAACm5torjaLkSgzEiU3tMdSpAABiR/5SoT2d79yDJtxtJLf/b6zvAAFJ7ZEpvbJn9qjFlDZZNCeywfM09hAAUz3WWjKRNm+aGnuMkRvdU0JsyWf0qAANa2tfh7hFZ2ZqwTXzMrEAAB//9k=",
  },
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model<IProduct>("Product", productSchema);
