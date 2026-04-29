import type { Language } from "../config/i18n.js";
import { getResultCases } from "../data/results.js";

import type { ResultCase } from "../types/results.js";

interface ResultsPageData {
  cases: ResultCase[];
}

class ResultsService {
  public static getPageData(language: Language = "es"): ResultsPageData {
    return {
      cases: getResultCases(language)
    };
  }
}

export default ResultsService;
