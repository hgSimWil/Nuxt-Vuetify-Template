<template>
    <template>
        <v-card v-if="todo" class="mx-auto my-8" elevation="16" max-width="344">
            <v-card-item>
                <v-card-title>
                    {{ todo.text }}
                </v-card-title>

                <v-card-subtitle>
                </v-card-subtitle>
            </v-card-item>

            <v-card-text>

            </v-card-text>
        </v-card>
    </template>
</template>
<script setup>
import { ref as dbRef } from 'firebase/database'
import { useDatabaseList, useDatabaseObject, useDatabase } from 'vuefire'
const route = useRoute()
const db = useDatabase()
const todoRef = dbRef(db, 'todos/' + route.params.id)
const todo = useDatabaseObject(todoRef)

</script>