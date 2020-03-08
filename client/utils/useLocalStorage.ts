import { useState, useEffect } from "react";

const STORAGE_KEY = "js-quiz-questions";

export function getFromStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!data) {
    const storageData = { correct: [], incorrect: [] };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
    return storageData;
  }

  return data;
}

export function useQuestionStatus(i: string | number) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const data = getFromStorage();
    const status =
      Object.entries(data)?.find((x: any) => x[1]?.includes(`${i}`))?.[0] || "";
    setStatus(status);
  }, []);

  return status;
}

export function updateQuestion(i: string, correct: boolean) {
  const data = getFromStorage();
  const key = `${(!correct && "in") || ""}correct`;

  data[key] = [...data[key], i];

  return window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
