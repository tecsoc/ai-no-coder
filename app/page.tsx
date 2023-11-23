import { Code, NativeSelect } from "@mantine/core";
import HiddenLocalStorageInput from "../components/form/HiddenLocalStorageInput/HiddenLocalStorageInput";
import Form from "./features/Form/Form";

const TopPage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Form />
      <Code block>React.createElement();
        aaa
      </Code>
    </div>
  );
}

export default TopPage;