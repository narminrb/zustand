import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useCountStore = create((set) => {
    return {
        count: 0,
        onIncrement: (count) => set({count: count + 1}),
        onDecrement: (count) => set({count: count - 1}),
        onReset: () => set({count: 0}),
    }
})

// export const useStepperFormStore = create((set) => {
//     return {
//       formStepData: {},
//       addFormStepData: (data) => {
//         set((state) => ({ formStepData: { ...state.formStepData, ...data } }));
//       },
//     };
//   });


export const useStepperFormStore = create(
  persist(
    (set) => ({
      formStepData: {},
      addFormStepData: (data) =>
        set((state) => ({ formStepData: { ...state.formStepData, ...data } })),
    }),
    { name: "formStepData-storage" } // Saves data in localStorage
  )
);

// Corrected Selector
export const SelectTodos = (state) => state.formStepData;