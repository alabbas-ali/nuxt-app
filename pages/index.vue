<!-- setup secript which is gone run on the server for SSR -->

<!--
    Nuxt automatically scans files inside the 
    ~/server/api, 
    ~/server/routes, and 
    ~/server/middleware 
    directories to register API and server handlers with HMR support.

    Each file should export a default function defined with defineEventHandler().
    The handler can directly return JSON data, a Promise or use event.res.end() to send response.
-->

<script setup>
    // using composables like use asynic data 
    // const {data} = await useAsyncData('animals', () => $fetch('/api/animals'));
    // or more conveniently using fatch (it makes a fetch request and returns a data value that can be used in the template)
    // const {data} = await useFetch('/api/animals')
    // top level await which make thinks simple and easy to use
    // One think that you can incunter with server side rendering is that you can't use async/await in the top level await (sending tow much data over the wire)

    // const {data: dog} = await useFetch('/api/animals/doggy',  {
    //     pick: [ 'name', 'species', 'age' ]
    // })

    // or you can use transform to change the formate of the data 
    // const { data } = await useFetch('/api/animals',  {
    //     transform: (data) => {
    //         return data.map((animal) => {
    //             return {
    //                 name: animal.name.toUpperCase()
    //             }
    //         })
    //     }
    // })

    // but what is we wont to refrech this data later, it also return a refresh function that we can use to refresh the data
    const {data: animals, pending, error, refresh } = await useFetch('/api/animals',  {
        transform: (data) => {
            return data.map((animal) => {
                return {
                    name: animal.name.toUpperCase()
                }
            })
        }
    })


    //

    useHead({
        titleTemplate: 'My title',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no',
        charset: 'utf-8',
        meta: [
            { name: 'description', content: 'My meta description' },
            { name: 'keywords', content: 'My meta keywords' },
        ],
        bodyAttrs: {
            class: 'my-body-class',
        },
    })


</script>

<!-- even using the Head component in the temple, or inside the serverside script -->
<template>
<div>
    <Head>
        <title>Wow I like this</title>
    </Head>
    <p v-if="pending">Fetching Animals...</p>
    <p v-if="error">Error while fetching Animals</p>

    <!-- <div>
        {{dog.name}} , {{dog.species}} , {{dog.age}}
    </div> -->

    <ul>
        <li v-for="animal in animals">
           {{animal.name}}
        </li>
    </ul> 
    <div>
        <button :disabled="pending" @click="refresh()">
            Get Latest Data
        </button>
    </div>
</div>
</template>

