import { createSlice } from '@reduxjs/toolkit'

let TEST_DATA = []
const COLOR = ["red", "green", "blue", "yellow"]

for (let i = 0; i < 10; i++) {
  TEST_DATA = [...TEST_DATA, {
    id: i,
    title: `title ${i}`,
    text: `test text ${i}`,
    backgroundColor: COLOR[Math.floor(Math.random() * COLOR.length)]
  }]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    listTodos: [],
    isShowModalCreate: false,
    isShowModalEdit: false,
    isShowModalDelete: false,
    editingTodoInfo: null,
    deletingId: null,
    // backgroundColor: [],
    listFilterTodos: [],
    listSearch: [],
    filter: {
      searchKey: '',
      color: [],
    }
  },
  reducers: {
    showModalCreate: (state) => {
      state.isShowModalCreate = true
    },
    hideModalCreate: (state) => {
      state.isShowModalCreate = false
    },
    showModalEdit: (state, action) => {
      const { editingTodoInfo } = action.payload
      state.editingTodoInfo = editingTodoInfo
      state.isShowModalEdit = true
    },
    hideModalEdit: (state) => {
      state.editingTodoInfo = null
      state.isShowModalEdit = false
    },
    showModalDelete: (state, action) => {
      const { deletingId } = action.payload
      state.deletingId = deletingId
      state.isShowModalDelete = true
    },
    hideModalDelete: (state) => {
      state.isShowModalDelete = false
    },
    setTodoList: (state) => {
      state.listTodos = TEST_DATA
    },
    setLoading: (state, action) => {
      const { isLoading } = action.payload
      state.isLoading = isLoading
    },
    addTodo: (state, action) => {
      const { todo } = action.payload
      state.listTodos = [...state.listTodos, todo]
    },
    removeTodo: (state, action) => {
      const { id } = action.payload
      state.listTodos = state.listTodos.filter((item) => item.id !== id)
    },
    editTodo: (state, action) => {
      const { id, todo } = action.payload
      state.listTodos = state.listTodos.map((item) => item.id === id ? todo : item)
    },

    filterColor: (state, action) => {
      const { backgroundColor, searchKey }= action.payload
      let _list = [...state.listTodos]

      state.filter.searchKey = searchKey
      console.log(state.filter.color)
      
      if (backgroundColor === "default") {
        state.filter.color = ["default"]
      }

      else if (backgroundColor?.length > 0) {
        
        // click default => state.filter.color add default and remove all color except default
        
        if(!state.filter.color.includes(backgroundColor)) {
          state.filter.color = [...state.filter.color, backgroundColor].filter(item => item !== "default")
          _list = _list.filter((item) => state.filter.color.includes(item.backgroundColor))
        }
        
        else  {
          state.filter.color = state.filter.color.filter((item) => item !== backgroundColor)
          _list = _list.filter((item) => state.filter.color.includes(item.backgroundColor))
          
        }
        console.log(state.filter.color)
      }

      


      if(searchKey) {
        _list = _list.filter((item) => item.title.includes(searchKey))
      }
      state.listFilterTodos = _list
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  showModalCreate,
  hideModalCreate,
  showModalEdit,
  hideModalEdit,
  showModalDelete,
  hideModalDelete,
  setTodoList,
  setLoading,
  addTodo,
  removeTodo,
  editTodo,
  filterColor, 
  searchList
} = todoSlice.actions

export default todoSlice.reducer

export const selectTodo = (state) => state.todo

export const fetchTodo = () => (dispatch) => {
  dispatch(setLoading({ isLoading: true }))
  setTimeout(() => {
    dispatch(setTodoList())
    dispatch(setLoading({ isLoading: false }))
    dispatch(filterColor({color: [], searchKey: ''}))
  }, 2000)
}