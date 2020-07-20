<template>
  <v-data-table :headers="headers" :items="commandes" sort-by="dateCommande" class="elevation-1" @click:row="handleClick">
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
                    <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.dateCommande" label="date commande"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.allérgies" label="allérgies"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.note" label="note"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.état" label="état"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.prixTotal" label="prix total"></v-text-field>
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
    dialog: false,
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "date commande", value: "dateCommande" },
      { text: "allérgies", value: "allérgies" },
      { text: "note", value: "note" },
      { text: "état", value: "état" },
      { text: "prix total", value: "prixTotal" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    commandes: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      dateCommande: "",
      allérgies: "",
      note: "",
      prixTotal: 0
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
      this.commandes = [
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: new Date().toString().substr(0, 10),
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        },
        {
          id: "1",
          dateCommande: "01/01/2020",
          allérgies: "abcde",
          note: "abcde",
          état: "äbcde",
          prixTotal: 0
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.commandes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.commandes.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.commandes.splice(index, 1);
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
        Object.assign(this.commandes[this.editedIndex], this.editedItem);
      } else {
        this.commandes.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>