import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { Input } from "../ui/Input";

interface Props {
  className?: string;
  placeholder: string;
  key?: string;
}

export const Search = ({ className, placeholder, key = "search" }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  console.log(debouncedSearch);

  useEffect(() => {
    if (!debouncedSearch?.trim()) {
      searchParams.delete(key);
      return setSearchParams(searchParams);
    }

    setSearchParams({ [key]: search });
  }, [debouncedSearch]);

  return (
    <div className={className}>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        variant="search"
      />
    </div>
  );
};
