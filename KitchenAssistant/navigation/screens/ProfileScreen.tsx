import { View, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, {useContext} from 'react';
import { TextInput, ToggleButton, Chip } from 'react-native-paper';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import Globals from '../../Globals';
import { ProfileContext } from '../../profile-components/ProfileContext';

export default function ProfileScreen({
    navigation
}: any) {
    const {
        height, 
        setHeight,
        weight,
        setWeight,
        age,
        setAge,
        gender, 
        setGender,
        numPeople,
        setNumPeople,
        diets,
        setDiets,
        additionalInfo,
        setAdditionalInfo
    } = useContext(ProfileContext)!;

    const chips = [
        { id: 1, label: 'Vegatarian' },
        { id: 2, label: 'Vegan' },
        { id: 3, label: 'Keto' },
        { id: 4, label: 'Paleo' },
        { id: 5, label: 'Low-Carb' },
        { id: 6, label: 'High Protein' },
      ];

    var cmHeights = [];
    for (var i = 60; i <= 240; i++) {
        cmHeights.push(i);
    }

    const handleChipPress = (diet: string) => {
        if (diets.includes(diet)) {
            setDiets(diets.filter((selectedDiet) => selectedDiet !== diet));
        } else {
            setDiets([...diets, diet]);
        }
        dismissKeyboard();
    };

    const dietIsSelected = (diet: string) => {
        return diets.includes(diet)
    }

    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
    
    const handleGenderValueChange = (gender: string) => {
        setGender(gender);
        dismissKeyboard();
    }
    const handleNumPeopleValueChange = (numPeople: string) => {
        setNumPeople(numPeople);
        dismissKeyboard();
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.formContainer}>
            <TextInput
                label="Height (cm)"
                value={height}
                onChangeText={setHeight}
                keyboardType='numeric'
                />
            {/* <View style={styles.cmScrollInput}>
                <ScrollPicker
                    dataSource={cmHeights}
                    selectedIndex={110}
                    renderItem={(data, index, isSelected) => {
                        return(
                            <View>
                                <Text>{data}</Text>
                            </View>
                        )
                    }}
                    onValueChange={cmHeight => {setCmHeight(cmHeight.toString())}}
                    wrapperHeight={60}
                    wrapperColor={Globals.COLOR.WHITE}
                    itemHeight={40}
                    highlightColor={Globals.COLOR.DARKERGREEN}
                    highlightBorderWidth={2}
                />
            </View> */}
            <TextInput
                label="Weight (kg)"
                value={weight}
                onChangeText={weight => setWeight(weight)}
                keyboardType='numeric'
                />
            <TextInput
                label="Age"
                value={age}
                onChangeText={age => setAge(age)}
                keyboardType='numeric'
                />
            <ToggleButton.Row onValueChange={handleGenderValueChange} value={gender}>
                <ToggleButton icon="gender-male" value="male" />
                <ToggleButton icon="gender-female" value="female" />
            </ToggleButton.Row>
            <ToggleButton.Row onValueChange={handleNumPeopleValueChange} value={numPeople}>
                <ToggleButton icon="numeric-1" value="1" />
                <ToggleButton icon="numeric-2" value="2" />
                <ToggleButton icon="numeric-3" value="3" />
                <ToggleButton icon="numeric-4" value="4" />
            </ToggleButton.Row>
            <View style={styles.chipContainer}>
                {chips.map(({ id, label }) => (
                    <Chip key={id} style={dietIsSelected(label) ? styles.selectedChip : styles.unselectedChip} mode="outlined" onPress={() => handleChipPress(label)}>
                    {label}
                    </Chip>
                ))}
                </View>
            <TextInput
                label="Any other dietary restrictions/preferences you have"
                value={additionalInfo}
                onChangeText={additionalInfo => setAdditionalInfo(additionalInfo)}
                multiline={true}
                />
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: Globals.COLOR.WHITE,
        width: '100%', 
    },
    chipContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginTop: 10, 
        width: '100%', 
    },
    selectedChip: {
        margin: 4,
        backgroundColor: Globals.COLOR.LIGHTGREEN
    },
    unselectedChip: {
        margin: 4
    },
    cmScrollInput: {
        height: 80, 
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10, 
    },
})