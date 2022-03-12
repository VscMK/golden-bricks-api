'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Roles', [{
                    role_id: 1,
                    name: "Administrator"
                },
                {
                    role_id: 2,
                    name: "Administrator (observer)"
                },
                {
                    role_id: 3,
                    name: "Beekeeper"
                },
                {
                    role_id: 4,
                    name: "Beekeepers coordinator"
                },
                {
                    role_id: 5,
                    name: "Warehouse manager"
                },
            ]
        );

        // await queryInterface.bulkInsert(
        //     'user', [{
        //             id: 1,
        //             first_name: "user1",
        //             last_name: "last_name",
        //             email: "user1@test.com",
        //             hashed_password: "P@ssword011",
        //             role_id: 1,
        //             createdAt: new Date(),
        //             updatedAt: new Date()
        //         },
        //         {
        //             id: 2,
        //             first_name: "user2",
        //             last_name: "last_name",
        //             email: "user2@test.com",
        //             hashed_password: "P@ssword011",
        //             role_id: 2,
        //             createdAt: new Date(),
        //             updatedAt: new Date()
        //         },
        //         {
        //             id: 3,
        //             first_name: "user3",
        //             last_name: "last_name",
        //             email: "user3@test.com",
        //             hashed_password: "P@ssword011",
        //             role_id: 3,
        //             createdAt: new Date(),
        //             updatedAt: new Date()
        //         },
        //         {
        //             id: 4,
        //             first_name: "user4",
        //             last_name: "last_name",
        //             email: "user4@test.com",
        //             hashed_password: "P@ssword011",
        //             role_id: 4,
        //             createdAt: new Date(),
        //             updatedAt: new Date()
        //         },
        //         {
        //             id: 5,
        //             first_name: "user5",
        //             last_name: "last_name",
        //             email: "user5@test.com",
        //             hashed_password: "P@ssword011",
        //             role_id: 5,
        //             createdAt: new Date(),
        //             updatedAt: new Date()
        //         }
        //     ]
        // )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};