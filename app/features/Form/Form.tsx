"use client";
import styles from "./Form.module.scss";
import { Button, NativeSelect } from "@mantine/core";
import HiddenLocalStorageInput from "@/components/form/HiddenLocalStorageInput/HiddenLocalStorageInput";
import { atcoderLankList } from "@/datas/formDatas";

const Form = () => {
  return (
    <div className={styles.form}>
      <HiddenLocalStorageInput label="Open AI APIキー" placeholder="APIキーを入力してください" />
      <NativeSelect label="AtCoder ランク" placeholder="ランクを選択してください" data={atcoderLankList} required />
      <Button>問題を生成</Button>
    </div>
  )
};

export default Form;