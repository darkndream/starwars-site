import { IPeople } from './IPeople';
/**
 * A person within the Star Wars universe
 */
export interface IPeopleList {
  /**
   * Amount of persons
   */
  count: number;
  /**
   * Next page
   */
  next: string;
  /**
   * Previous page
   */
  previous: string;
  /**
   * The results of the request
   */
  results: Array<IPeople>;
}
