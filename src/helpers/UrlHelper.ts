/**
 * @author https://github.com/foxsir
 */

type Params = {
  baseSearch?: boolean,
  params: Record<string, string>,
}

export const UrlHelper = {
  /**
   * optional incremental build urlSearch params
   * @param baseSearch
   * @param params
   * @return URLSearchParams
   */
  createQueryParams: ({baseSearch, params}: Params): URLSearchParams => {
    const data: {[key: string]: string} = {};
    if(baseSearch) {
      const search = [...new URLSearchParams(location.search)];
      search.forEach(item => {
        data[item[0]] = item[1];
      });
    }

    return new URLSearchParams(Object.assign(data, params));
  },
  /**
   * remove urlSearch params
   * @param params
   * @return URLSearchParams
   */
  removeQueryParams: (params: string[]): URLSearchParams => {
    const data: {[key: string]: string} = {};
    const search = [...new URLSearchParams(location.search)];
    search.forEach(item => {
      if(!params.includes(item[0])) {
        data[item[0]] = item[1];
      }
    });

    return new URLSearchParams(data);
  },
}
