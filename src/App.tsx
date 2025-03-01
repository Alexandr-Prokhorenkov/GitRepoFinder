import { useState } from "react";
import styles from "./App.module.scss";
import { MainTitle } from "./shared/ui/MainTitle/MainTitle";
import { SearchInput } from "./shared/ui/SearchInput/SearchInput";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.app}>
      <MainTitle title="Github Search" />
      <SearchInput
        value={search}
        onChange={(value) => setSearch(value)}
        placeholder="Введите имя пользователя..."
        withIcon
      />
    </div>
  );
}

export default App;
