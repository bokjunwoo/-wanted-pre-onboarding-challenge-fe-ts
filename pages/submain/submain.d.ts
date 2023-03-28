export interface ISubmainParams {
  region: string;
  stay: IContents[];
  tour: IContents[];
}

export type SubmainParamsType = {
  params: {
    region: string;
  };
};