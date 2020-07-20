<template>
  <v-data-table
    :headers="headers"
    :items="menus"
    sort-by="libelle"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>

            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
            <v-spacer></v-spacer>
          </template>
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.libelle" label="libelle"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.type" label="type"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.prix" label="prix"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.stars" label="stars"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.review" label="review"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    search: "",
    dialog: false,
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "libelle", value: "libelle" },
      { text: "id", value: "id" },
      { text: "type", value: "type" },
      { text: "prix", value: "prix" },
      { text: "stars", value: "stars" },
      { text: "review", value: "review", sortable: false },
      { text: "actions", value: "actions", sortable: false }
    ],
    menus: [],
    editedIndex: -1,
    editedItem: {
      libelle: "",
      id: "",
      type: "",
      prix: 0,
      stars: 0,
      review: ""
    },
    defaultItem: {
      id: "",
      dateCommande: new Date().toString().substr(0, 10),
      allérgies: "",
      note: "",
      prixTotal: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.menus = [
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        },
        {
          libelle: "abcde",
          id: "1",
          type: "abcde",
          prix: 0,
          stars: 0,
          review: "abcde"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.menus.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.menus.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.menus.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.menus[this.editedIndex], this.editedItem);
      } else {
        this.menus.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>