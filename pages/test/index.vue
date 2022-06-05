<template>
  <main>
    TEST

    <ContentList v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <pre>{{ article }}</pre>
      </div>
    </ContentList>

    <content-doc path="work" />
  </main>
</template>
