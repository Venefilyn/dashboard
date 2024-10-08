// Copyright Contributors to the Packit project.
// SPDX-License-Identifier: MIT

import {
  PageGroup,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent,
} from "@patternfly/react-core";

import { ProjectSearch } from "./ProjectSearch";
import { ProjectsList } from "./ProjectsList";

const Projects = () => {
  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Projects</Text>
          <Text component="p">
            List of repositories with Packit Service enabled
          </Text>
        </TextContent>
      </PageSection>
      <PageGroup>
        <PageSection>
          <ProjectSearch />
          <ProjectsList />
        </PageSection>
      </PageGroup>
    </>
  );
};

export { Projects };
