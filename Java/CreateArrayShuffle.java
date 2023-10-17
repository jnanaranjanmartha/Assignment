package com.company;

import java.util.ArrayList;
import java.util.Collections;

public class CreateArrayShuffle {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i =1; i<=7; i++){
            numbers.add(i);
        }
        System.out.println("Array List: "+ numbers);
        Collections.shuffle(numbers);
        System.out.println("Shuffle List: "+ numbers);
    }
}
