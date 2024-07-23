import { Autocomplete, Group, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import NotesLogo from "../../assets/notes-notepad-svgrepo-com.svg";
import classes from "./HeaderSearch.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SearchPhraseContext } from "../MainLayout.tsx/MainLayout";

export function HeaderSearch() {
  const { setSearchPhrase } = useContext(SearchPhraseContext);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <NavLink to="/">
          <img src={NotesLogo} alt="logo" className={classes.logo} />
        </NavLink>

        <Group>
          <Autocomplete
            onChange={(e) => setSearchPhrase(e)}
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xl"
          />
        </Group>
      </div>
    </header>
  );
}
