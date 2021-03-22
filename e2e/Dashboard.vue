https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_M2E1OTUzNjQtOTBkZS00MTc1LWJmZmEtMWVkMGM2Y2M1ZTJl%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252206b84121-5f0a-4b49-ba2d-7738f681dd70%2522%252c%2522Oid%2522%253a%25228449ace5-1904-44fd-ba80-60dff3daf749%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=99426779-f0ba-41aa-8831-d193967bf963&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true
<template>
  <div class="dashboard">
    <v-content>
      <Notes :pages="pages" @new-note="newNote" @delete-note="deleteNote"/>
    </v-content>
    <v-dialog v-model="dialog">
        <v-card>
        <v-card-title>
            <span class="headline">New Note</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 sm12 md12>
                <v-text-field v-model="newTitle" value="" label="Title*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                <v-textarea v-model="newContent" value="" label="Content"></v-textarea>
                </v-flex>
            </v-layout>
            </v-container>
            <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="closeModal()">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="saveNote()">Save</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {indDB} from '../indexedDB.js'
import Notes from './Notes.vue'

export default {
  name: 'Dashboard',
  components: {
    Notes
  },
  data: () => ({
    pages:[],
    newTitle: '',
    newContent: '',
    index: 0,
    dialog: false
  }),
  mounted() {
    indDB.open().catch(function (e) {
      console.log("Something happened opening indexed DB: " + e.stack);
    });
    this.getAllRows();
  },
  methods:  {
    newNote () {
      this.dialog = true;
    },
    saveNote () {
      const newItem = {
        title: this.newTitle,
        content: this.newContent
      };
      this.pages.push(newItem);
      this.index = this.pages.length - 1;

      indDB.transaction('rw',indDB.notes,() => 
      {
        indDB.notes.add(newItem);
      });

      this.resetForm();
      this.closeModal();
    },
    closeModal () {
      this.dialog = false;
    },
    getAllRows () {
      indDB.notes.each(note => {this.pages.push(note);});
    },
    deleteNote (item) {
      this.deleteRow(this.pages[item]);
      this.pages.splice( item, 1);
      this.index = Math.max(this.index - 1, 0);
    },
    deleteRow (item){
      const criteria = {'title': item.title};
      // get primaryKey
      indDB.notes.where(criteria).first(
        (result) => {
          indDB.notes.delete(result.id);
        }
      );
    },
    resetForm () {
      this.newTitle = '';
      this.newContent = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
