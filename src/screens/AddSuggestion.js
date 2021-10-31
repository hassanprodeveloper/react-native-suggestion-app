import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

const AddSuggestion = (props) => {
  const {onSave, onCancel, label, setLabel} = props;
  return (
    <View>
      <View style={styles.add_suggestion_header}>
        <Text style={styles.headerDateText}>New Suggestion</Text>
      </View>
      <View style={styles.add_suggestion_form_row}>
        <Text style={styles.add_suggestion_form_row_label}>Label :</Text>
        <TextInput
          value={label}
          onChangeText={setLabel}
          style={styles.add_suggestion_form_row_text_input}
          placeholder="Enter Suggestion"
        />
      </View>
      <View style={styles.suggestion_display_card_footer}>
        <Pressable
          onPress={onCancel}
          style={[styles.suggestion_display_footer_button]}>
          <Text style={[styles.suggestion_display_footer_button_text]}>
            Cancel
          </Text>
        </Pressable>
        <Pressable
          onPress={onSave}
          style={[styles.suggestion_display_footer_button]}>
          <Text style={[styles.suggestion_display_footer_button_text]}>
            Save
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSuggestion;

const styles = StyleSheet.create({
  add_suggestion_header: {
    padding: 5,
  },
  headerDateText: {
    fontSize: 20,
    color: '#2A3D8E',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  add_suggestion_form_row: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  add_suggestion_form_row_label: {
    fontSize: 15,
    color: '#2A3D8E',
    marginHorizontal: 10,
  },
  add_suggestion_form_row_text_input: {
    flex: 1,
    fontSize: 15,
    backgroundColor: '#fff',
    height: 30,
    // marginHorizontal: 10,
    // borderWidth: 1,
    padding: 5,
    color: '#2A3D8E',
  },
  suggestion_display_card_footer: {
    //   backgroundColor: 'red',
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  suggestion_display_footer_button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginLeft: 5,
  },
  suggestion_display_footer_button_text: {
    color: '#2A3D8E',
  },
});
