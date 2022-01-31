import * as React from 'react';
import { TextContent, Text, Form } from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

import { ImportWizardFormContext } from './ImportWizardFormContext';

export const PipelineSettingsStep: React.FunctionComponent = () => {
  const form = React.useContext(ImportWizardFormContext).pipelineSettings;
  console.log('pipeline settings form', form);

  return (
    <>
      <TextContent className={spacing.mbMd}>
        <Text component="h2">Pipeline settings</Text>
      </TextContent>
      <Form>TODO: form fields for pipeline settings</Form>
    </>
  );
};
