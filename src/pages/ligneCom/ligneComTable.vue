<template>
  <v-data-table
    :headers="headers"
    :items="ligneComs"
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
                    <v-text-field v-model="editedItem.commande" label="commande"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.menu" label="menu"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.quantité" label="quantité"></v-text-field>
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
      { text: "commande", value: "commande" },
      { text: "menu", value: "menu" },
      { text: "quantité", value: "quantité" },
      { text: "actions", value: "actions", sortable: false }
    ],
    ligneComs: [],
    editedIndex: -1,
    editedItem: {
      commande: "",
      menu: "",
      quantité: ""
    },
    defaultItem: {
      commande: "",
      menu: "",
      quantité: ""
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
   /* this.$http
      .get("/ligneComs/" + this.id)
      .then(function(data) {
      
        this.datatable = data.body;
      });*/
    this.initialize();
  },

  methods: {
    initialize() {
      this.ligneComs = [
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        },
        {
          commande: "1",
          menu: "abcde",
          quantité: 0
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.ligneComs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.ligneComs.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.ligneComs.splice(index, 1);
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
        Object.assign(this.ligneComs[this.editedIndex], this.editedItem);
      } else {
        this.ligneComs.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>