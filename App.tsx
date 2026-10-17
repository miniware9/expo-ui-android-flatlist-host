import { Button, Host } from '@expo/ui';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const ROWS = Array.from({ length: 20 }, (_, index) => index);

export default function App() {
  const [editingRow, setEditingRow] = useState<number | null>(null);
  return (
    <FlatList
      style={styles.list}
      data={ROWS}
      keyExtractor={(row) => String(row)}
      extraData={editingRow}
      // Uncomment to make the Save button appear:
      // removeClippedSubviews={false}
      renderItem={({ item: row }) => (
        <View style={styles.row}>
          <Text>Row {row}</Text>
          <Host matchContents>
            <Button label={`Rendered with the row ${row}`} onPress={() => {}} />
          </Host>
          <Pressable onPress={() => setEditingRow(row)} style={styles.edit}>
            <Text>Edit {row}</Text>
          </Pressable>
          {editingRow === row && (
            <Host matchContents>
              <Button label={`Save ${row}`} onPress={() => {}} />
            </Host>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, paddingTop: 48 },
  row: { padding: 16, gap: 8, borderBottomWidth: StyleSheet.hairlineWidth },
  edit: { alignSelf: 'flex-start', padding: 8, borderWidth: 1, borderRadius: 6 },
});
