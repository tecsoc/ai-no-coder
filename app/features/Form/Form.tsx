"use client";
import styles from "./Form.module.scss";
import { Button, NativeSelect } from "@mantine/core";
import HiddenLocalStorageInput from "@/components/form/HiddenLocalStorageInput/HiddenLocalStorageInput";
import { AtcoderLank, atcoderLankList } from "@/datas/formDatas";
import { ReactElement, use, useCallback, useRef, useState } from "react";
import { generateQuestion } from "@/app/actions/openai";

const Form = () => {
  const atcoderLankSelectRef = useRef<HTMLSelectElement | null>(null);
  const atcoderLankSelectCallbackRef = useCallback((node: HTMLSelectElement) => {
    if (!node) return;
    atcoderLankSelectRef.current = node;
  }, []);

  const [question, setQuestion] = useState<ReactElement | null>(null);

  const generateButtonOnClick = useCallback(async () => {
    const atcoderLank = atcoderLankSelectRef.current?.value as AtcoderLank
    if (!atcoderLank) return;
    const question = await generateQuestion(atcoderLank);
    setQuestion(question);
  }, []);

  return (
    <div className={styles.form}>
      <HiddenLocalStorageInput label="Open AI APIキー" placeholder="APIキーを入力してください" />
      <NativeSelect ref={atcoderLankSelectCallbackRef}  label="AtCoder ランク" placeholder="ランクを選択してください" data={atcoderLankList} required />
      <Button onClick={generateButtonOnClick}>問題を生成する</Button>
      { question }
    </div>
  )
};

export default Form;