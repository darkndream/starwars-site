/**
 * A Star Wars film
 */
export interface IFilm {
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The people resources featured within this film.
   */
  characters: any[];
  /**
   * The director of this film.
   */
  director: string;
  /**
   * The release date at original creator country.
   */
  release_date: string;
  /**
   * The planet resources featured within this film.
   */
  planets: any[];
  /**
   * The title of this film.
   */
  title: string;
  /**
   * The vehicle resources featured within this film.
   */
  vehicles: any[];
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The opening crawl text at the beginning of this film.
   */
  opening_crawl: string;
  /**
   * The starship resources featured within this film.
   */
  starships: any[];
  /**
   * The species resources featured within this film.
   */
  species: any[];
  /**
   * The producer(s) of this film.
   */
  producer: string;
  /**
   * The episode number of this film.
   */
  episode_id: number;
}
