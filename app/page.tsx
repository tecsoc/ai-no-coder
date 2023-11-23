import HiddenLocalStorageInput from "../components/form/HiddenLocalStorageInput/HiddenLocalStorageInput";

const TopPage = () => {
  return <div>
    <h1>Home page</h1>
    <HiddenLocalStorageInput label="Open AI APIキー" placeholder="APIキーを入力してください" />
  </div>;
}

export default TopPage;