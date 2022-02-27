'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            role: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });

        await queryInterface.createTable('apiary', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            QR_code: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            location_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            no_gondolas: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            fence_YN: {
                type: Sequelize.CHAR,
            },
            electricity_YN: {
                type: Sequelize.CHAR,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('gondola', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            QR_code: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            no_colonies: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('colony', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            gondola_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gondola',
                    key: 'id'
                }
            },
            QR_code: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            no_boxes: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            queen_YN: {
                type: Sequelize.CHAR,
                allowNull: false,
            },
            queen_alarm_YN: {
                type: Sequelize.CHAR,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('queen', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            gondola_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gondola',
                    key: 'id'
                }
            },
            colony_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'colony',
                    key: 'id'
                }
            },
            color_plate: {
                type: Sequelize.STRING,
                allowNull: false
            },
            queen_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            queen_id: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            clipped_YN: {
                type: Sequelize.CHAR,
                allowNull: false,
            },
            mating_status: {
                type: Sequelize.CHAR,
                allowNull: false,
            },
            marked_YN: {
                type: Sequelize.CHAR,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });


    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropAllTables();
    }
};