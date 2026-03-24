import { resultCases } from "../data/results.js";

import type { ResultCase } from "../types/results.js";

interface ResultsPageData {
  cases: ResultCase[];
}

class ResultsService {
  public static getPageData(): ResultsPageData {
    return {
      cases: resultCases
    };
  }
}

export default ResultsService;
