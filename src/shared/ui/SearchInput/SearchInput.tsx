import { useState, useEffect, FC } from "react";
import styles from "./SearchInput.module.scss";
import searchIcon from "@/assets/images/icons/searchIcon.svg";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceTime?: number;
  withIcon?: boolean;
}

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Введите текст...",
  debounceTime = 300,
  withIcon = true,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(inputValue);
    }, debounceTime);

    return () => clearTimeout(timeout);
  }, [inputValue, debounceTime, onChange]);

  return (
    <div className={styles.searchInput}>
      {withIcon && <img src={searchIcon} alt="Поиск" className={styles.searchIcon} />}
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
