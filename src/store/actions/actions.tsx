import { setInfo } from '../../fetures/info/infoSlice';
import { apiGet, apiGetRandom } from '../../services/services';


export const getInfo = (type: string, value: string) => (dispatch: any)=> {
  apiGet(type,value)
    .then((data)=> {
      dispatch(setInfo({info: data}));
    })
};

export const getRandomInfo = (type: string) => (dispatch: any) => {
  apiGetRandom(type)
    .then((data)=>{
      dispatch(setInfo({info: data}))
    })
}

export type getInfoActionType = {
  type: string,
  value: string,
  payload: {info: string}
}

export type getRandomInfoActionType = {
  type: string,
  payload: {info: string}
}