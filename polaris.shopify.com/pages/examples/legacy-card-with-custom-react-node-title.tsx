import {LegacyCard, Stack, Icon, List, Text} from '@shopify/polaris';
import {ProductsMajor} from '@shopify/polaris-icons';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function LegacyCardExample() {
  return (
    <LegacyCard title="Products">
      <LegacyCard.Section
        title={
          <Stack>
            <Icon source={ProductsMajor} />
            <Text variant="headingXs" as="h3">
              New Products
            </Text>
          </Stack>
        }
      >
        <List>
          <List.Item>Socks</List.Item>
          <List.Item>Super Shoes</List.Item>
        </List>
      </LegacyCard.Section>
    </LegacyCard>
  );
}

export default withPolarisExample(LegacyCardExample);
