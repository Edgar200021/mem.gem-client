import { CreateTokenNav } from "../components/CreateTokenNav/CreateTokenNav";
import { TokenFurtherList } from "../components/lists/TokenFurtherList";
import { TokenList } from "../components/lists/TokenList";
import { Search } from "../components/Search/Search";
import { Tabs } from "../components/Tabs/Tabs";

interface Props {
  className?: string;
}

export const MainPage = ({ className }: Props) => {
  return (
    <main className={className}>
      <div className="box">
        <TokenList className="mb-3" />
        <CreateTokenNav className="mb-3" />
        <Search className="mb-3" placeholder="Search for tokens" />
        <Tabs
          className="bg-gray-200"
          content={[
            {
              title: "Hot",
              content: <TokenFurtherList />,
            },
            {
              title: "New",
              content: <TokenFurtherList />,
            },
          ]}
        />
      </div>
    </main>
  );
};
