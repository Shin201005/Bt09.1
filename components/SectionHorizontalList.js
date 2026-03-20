import React from 'react';
import { FlatList } from 'react-native';
import SectionHeader from './SectionHeader';

export default function SectionHorizontalList({
  title,
  data,
  renderItem,
  keyExtractor,
  actionText,
}) {
  return (
    <>
      <SectionHeader title={title} actionText={actionText} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}