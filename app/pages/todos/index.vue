<template>
    <ul>
        <li style="display: block;">
            <v-btn :to="`/todos/${todo.id}`" v-for="todo in todos" :key="todo.id">{{ todo.text }}</v-btn>
        </li>
    </ul>
</template>
<script setup>
import { ref as dbRef } from 'firebase/database'
import { useDatabaseList, useDatabaseObject, useDatabase } from 'vuefire'

const db = useDatabase()
const todosRef = dbRef(db, 'todos')
const todos = useDatabaseList(todosRef)
</script>